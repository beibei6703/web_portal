import {itProgress} from '../api/it'
import {announceLIst} from '../api/annce'
let it={
    state:{
        itProgressList:[],
        announceList:[]
    },
    actions:{
        //获取通知公告列表
        getannceList(store,data){
            announceLIst(data).then(res=>{
                const data = res.data
                if(data.success== true && data.data){
                    store.commit("getAnnounce",data.data)
                }else{
                    console.log(data.errorMsg,"error")
                }
            })
              
           
        },
        getitProgress(store,data){
            itProgress(data).then(res=>{
                const data = res.data
                if(data.success==true && data.data){
                    store.commit("getProgress",data.data)
                }
            })
        }

    },
    mutations:{
        getProgress(state,payload){
            state.itProgressList = payload

        },
        getAnnounce(state,payload){
            state.announceList = payload
        }

    }
}
export default it