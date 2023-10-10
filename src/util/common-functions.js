
export const formatToAmount = (amount)=>{
    const cleanAmount = amount.toString().replaceAll(',',"");
    return Number(`${cleanAmount}`).toLocaleString('en-US');
}