const loggedIn=false
export default defineNuxtRouteMiddleware((to,from)=>{
    if(to.path==="/admin"){
        return navigateTo("/");
    }
});