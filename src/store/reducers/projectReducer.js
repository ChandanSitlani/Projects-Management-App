import { Switch } from "react-router-dom";

const initState={
    projects:[
        
            {id:'1',title:'help me find peach,content:abcdefgh sdjd'},
            {id:'2',title:'collect all stars',content:'abcd efgh'}

        
    ]
}
const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project',action.project)
    }
    return state

}
export default projectReducer;