<template>
	<div class="contain_common">
		<div class="items" v-for="(item,index) in getcommonList" :key="item.id" @click="getopenCom(index)">
			<div class="imgs">
				<img :src="item.app_icon" alt>
			</div>

			<span class="softDec">{{item.app_name}}</span>
		</div>
		<div class="additem" @click="addSystem">
			<img src="../assets/image/add.png" alt>
			<span class="addText">维护</span>
		</div>
		<Listdialog v-if="showDialog"></Listdialog>
		<div class="diaContainer" v-if="showdialog1">
			<div class="confirm">
				<div class="cons">
					<span class="comInfo">为保证账户安全，请输入www密码验证</span>
					<div class="bottomInput">
						<input type="password" placeholder="请输入密码" v-model="psw">
						<span class="bgspan" @click="getcomfirm">确定</span>
					</div>
				</div>
			</div>
		</div>
		<div class="diaContainer" v-if="showdialog2">
			<div class="confirm">
				<div class="cons">
					<span class="comInfo">为保证账户安全，请输入www密码验证</span>
					<div class="bottomInput">
						<input type="password" placeholder="请输入密码" v-model="psw">
						<span class="bgspan" @click="getcomfirm1">确定</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Listdialog from "../components/listdialog";
	import { commonUse } from "../api/nav.js";
	import { performance, comfirmUser } from "../api/performance.js";
	import qs from "qs";
	let Base64 = require("js-base64").Base64;
	export default {
		name: "Commonuse",
		components: {
			Listdialog
		},
		data() {
			return {
				commonList: [],
				showdialog1: false,
				psw: "",
				showdialog2: false
			};
		},
		computed: {
			getChooseList() {
				return this.$store.state.navigation.chooseList;
			},
			showDialog() {
				return this.$store.state.navigation.showlistDialog;
			},
			getcommonList() {
				return this.$store.state.navigation.commonList;
      }
		},
		created() {
			//获取常用应用列表
			const data = qs.stringify({
				workCode: this.getCookie("username")
			});
			this.$store.dispatch("getCommonuse", data);
		},
		destroyed() {},
		methods: {
			//添加应用
			addSystem() {
				this.$store.commit("getchangeDialog", true);
				//获取选中的列表
				const msg = qs.stringify({
					workCode: this.getCookie("username")
				});
				this.$store.dispatch("getchooseApp", msg);
			},
			//
			getopenCom(index) {
				if(
					this.getcommonList[index].app_name != "绩效系统" &&
					this.getcommonList[index].app_name != "Talefull人事" &&
					this.getcommonList[index].app_name.toLowerCase() != "wiki"
				) {
					window.open(this.getcommonList[index].app_url);
				} else {
					if(this.getcommonList[index].app_name == "绩效系统") {

						performance(this.getCookie("username")).then(res => {
							if(res.data.code == 1 && res.data.data) {
								window.open(res.data.data);
							}
						});

					} else if(this.getcommonList[index].app_name == "Talefull人事") {

						if(this.getCookie("ecology_p")) {
							window.open("http://www.api.com/userInfo/talefull");
						} else {
							this.showdialog1 = true;
						}

					}else if(this.getcommonList[index].app_name.toLowerCase() =="wiki"){

			        	 if(this.getCookie("ecology_p")){
			                  window.open("http://wiki.api.com/")
			            }else{
			                this.showdialog2 = true
			            }

			        }
				}
			},
			getcomfirm() {
				let psd = Base64.encode(Base64.encode(this.psw));
				console.log(psd, "psd");
				const data = qs.stringify({
					accounts: this.getCookie("username"),
					password: psd,
					isGetDKey: false,
					flag: 1
				});
				//talefull验证
				comfirmUser(data).then(res => {
					// console.log(res)
					const data = res.data;
					if(data.code == 1) {
						this.setCookie("ecology_p", psd);
						this.showdialog1 = false;
						window.open("http://www.api.com/userInfo/talefull");
					}else{
                	 this.$message.error('请填写正确的www密码');
					}
				});
			},
			//wiki验证
			getcomfirm1() {
				let psd = Base64.encode(Base64.encode(this.psw));
				const data = qs.stringify({
					accounts: this.getCookie("username"),
					password: psd,
					isGetDKey: false,
					flag: 1
				});
				comfirmUser(data).then(res => {
					// console.log(res)
					const data = res.data;
					if(data.code == 1) {
						this.setCookie("ecology_p", psd);
						this.showdialog2 = false;
						 window.open("http://wiki.api.com/")
					}else{
                	 this.$message.error('请填写正确的www密码');
					}
				});
			}
		}
	};
</script>

<style lang="less" scoped>
	@import "../assets/css/common.less";
	.diaContainer {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0,0.5);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		.confirm {
			width: 480px;
			height: 200px;
			background: #fff;
			position: fixed;
			top: 50%;
			left: 50%;
			margin-top: -100px;
			margin-left: -240px;
			border-radius: 6px;
			.cons {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				//  justify-content: center;
				.comInfo {
					display: block;
					width: 320px;
					font-size: 14px;
					text-align: left;
					margin-top: 50px;
				}
				.bottomInput {
					width: 320px;
					height: 30px;
					//  display:flex;
					//  align-items: center;
					margin-top: 20px;
					input {
						display: block;
						border: 0;
						height: 30px;
						width: 200px;
						border: 1px solid #dcdfe6;
						outline: none;
						padding-left: 15px;
						line-height: 30px;
						font-size: 14px;
						float: left;
					}
					.bgspan {
						width: 60px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						background: #f10d3b;
						// display: block;
						color: #fff;
						font-size: 14px;
						float: left;
						margin-left: 10px;
					}
				}
			}
		}
	}
</style>
