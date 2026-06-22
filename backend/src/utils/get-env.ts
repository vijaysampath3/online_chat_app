export const getEnv = (key:string,defaultval:string) => {
    const val=process.env[key] ?? defaultval;
    if(!val) throw new Error("missing env variablel:"+ key);
    return val;
};