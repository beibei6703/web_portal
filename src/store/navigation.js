
 import {commonUse,chooseApp,wwwSystem} from "../api/nav.js"
 import {personInfo} from "../api/it"
let navigation = {
    state:{
        showlistDialog:false,
        chooseList:[],
        listId:[],
        // Ids:"",
        systemList:[],
        commonList:[],
        personImg:""
       
    },
    actions:{
        getCommonuse(store,data){
            commonUse(data).then( res =>{
                const data = res.data
               if(data.success==true && data.data){
                   store.commit("getcommonSys",data.data)
               }
            })
         },
         //选中的图标
         getchooseApp(store,data){
            chooseApp(data).then(res=>{
                const data = res.data
                if(data.success==true && data.data){
                    // this.chooseList = data.data
                    store.commit("getchooseList",data.data)
                }else{
                    console.log(data.errorMsg,"error")
                }
             })
         },
         //获取www系统列表
         getwwwlist(store){
            wwwSystem().then(res => {
                const data = res.data
                if(data.success==true && data.data){
                    store.commit("getsystemList",data.data)
                    // this.systemList = data.data
                }else{
                    console.log(data.errorMsg,"error")
                }
            })
         },
         //获取头像信息
getpeoInfo(store,data){
    personInfo(data).then(res=>{
        const data = res.data
        if(data.success== true && data.data){
            store.commit("getpeoImg",data.data.userAvatar)
        }
    })
}
        
      
        

    },
    mutations:{
        getchangeDialog(state,payload){
            state.showlistDialog = payload
        },
        getchooseList(state,payload){
            state.chooseList = payload
            state.chooseList.forEach(item => {
                if(state.listId.indexOf(item.uuid)==-1){
                    state.listId.push(item.uuid)
                }else{
                    return state.listId
                } 
            });
        },
        getsystemList(state,payload){
            state.systemList = payload
        },
        getcommonSys(state,payload){
            state.commonList = payload
        },
        getpeoImg(state,payload){
            state.personImg =payload
        }
    

    }
}
export default navigation;