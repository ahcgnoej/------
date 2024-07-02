let num=5
while(num){
    console.log(num)
    num--
}

switch(num){
    case 1:
        console.log('거짓')
        break;
    case 2:
        console.log('거짓')
        break;
    case 5:
        console.log('거짓')
        break;
    case 0:
        console.log('참이다. 이미 위에서 num은 0이 되었다')
        break;
    case '0':
        console.log('문자형이라 참이아니지롱')
        break;
}