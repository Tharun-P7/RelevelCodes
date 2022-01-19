function f(strings,o){
    if(strings==""){
        console.log(o);
        return;
    }
    let c=strings[0];
    let rest=strings.substring(1);
    f(rest,o+c);
    f(rest,o);
}
f("abc","");