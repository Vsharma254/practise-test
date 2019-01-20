class test{
    setMyname(t:number) { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(t * 2);
            }, 1000);
        });
    }
}
class test2 { 
    async run(s) { 
        var t2 = new test();
        var f1 = await t2.setMyname(10);
        var f2 = await t2.setMyname(30);
        var f3 = await t2.setMyname(20);
        return s + f1 + f2 + f3;
    }
}

var g1 = new test2();
g1.run(10).then((res) => {
alert(res);
});
