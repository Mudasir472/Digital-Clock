function myfunction()
{
    
    let dat=new Date();
    let a=dat.getHours();
    let b=dat.getMinutes();
    let c=dat.getSeconds()
    let session="AM";

    if( a > 12)
    {
        a = a-12;
        session="PM";
    }
    let time=a+' : '+b+' : '+c+ "  "+session;

    let x=dat.getDate();
    let y=dat.getMonth();
    let z=dat.getFullYear();

    let date=x+" / "+y+" / "+z;
    
    docfile=document.getElementById("click");
    docfile.innerHTML=time + " on <br><br> "+ date;
    
    
    
    
    // if(dat.getSeconds()>=0 && dat.getSeconds()<10)
    // {
    //     dat.getSeconds()="0"+dat.getSeconds();
    // }
}

setInterval(myfunction,1000);