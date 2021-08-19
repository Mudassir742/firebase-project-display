export const createProject = (project) =>{
    return (dispatch,getState)=>{

        dispatch({type:"CREATE_PROJECT",payload:project})
    }
}