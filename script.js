const pup = require("puppeteer");


let id = "Randomuknow1@gmail.com";
let pwd = "random@123";
let id2 = "random2uknown@gmail.com";
let pwd2 = "random2@123";
let mailText = require("./abc.js");
let mailText2 = require("./def.js");
let browserPromise = pup.launch({
    headless: false,
    defaultViewport: false
});


//for first mail operation
let brow;
browserPromise.then(function(browser){
    brow = browser;
    let pagesPromise = browser.pages();
    return pagesPromise;
}).then(function(pages){
    tab = pages[0];
    let pageOpenPromise = tab.goto("https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
    return pageOpenPromise;
}).then(function(){
    let waitPromise = tab.waitForSelector(".whsOnd.zHQkBf ", {visible:true});
    return waitPromise;
}).then(function(){
    let allclassPromise = tab.click(".whsOnd.zHQkBf");
    return allclassPromise;
}).then(function(){
    let idPromise = tab.type("#identifierId",id);
    return idPromise;
}).then(function(){
    let nextbtnPromise = tab.click(".VfPpkd-RLmnJb");
    return nextbtnPromise;
})
.then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(() => {
                resolve();
            }, 3000);
        })
    })
.then(function(){
    let pwdclassPromise = tab.click(".whsOnd.zHQkBf");
    return pwdclassPromise;
}).then(function(){
    let pwdPromise = tab.type(".whsOnd.zHQkBf",pwd);
    return pwdPromise;
}).then(function(){
    let nextbtnPromise = tab.click(".VfPpkd-RLmnJb");
    return nextbtnPromise;
 })
.then(function(){
    let composeMailWaitPromise = tab.waitForSelector(".T-I.T-I-KE.L3");
    return composeMailWaitPromise;
})
.then(function(){
    let composeMailPromise = tab.click(".T-I.T-I-KE.L3");
    return composeMailPromise;
}).then(function(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve();
        }, 5000);
    })
})
.then(function(){
    let toWaitPrimise = tab.waitForSelector(".wO.nr.l1",{visible:true}); // after clicking on compose waiting for box to appear
    return toWaitPrimise;
}).then(function(){
    let toPromise = tab.click(".wO.nr.l1"); // after box will appear click on To/Receipient 
    return toPromise;
}).then(function(){
    let toTypePromise = tab.type(".wO.nr.l1",id2,{delay:200}); //type the mail id of the receipient
    return toTypePromise;
}).then(function(){
    let enterPromise = tab.keyboard.press("Enter"); //by clicking enter it will be selected
    return enterPromise;
}).then(function(){
    let subjectclickPromise = tab.click(".aoT"); // this is for subject cc
    return subjectclickPromise;
}).then(function(){
    let subjectPromise = tab.type(".aoT","Mail Regarding Puppeteer Testing Purpose",{delay:100}); //  type the message in subject / cc
    return subjectPromise;
}).then(function(){
    let textAreaClickPromise = tab.click(".Am.Al.editable.LW-avf.tS-tW"); // click on the text area where we need to type our message
    return textAreaClickPromise;
}).then(function(){
    let textAreaPromise = tab.type(".Am.Al.editable.LW-avf.tS-tW",mailText,{delay:300}); // getting the text from abc.js file for typing message in compose-mail box
    return textAreaPromise;
}).then(function(){ // returning a new promise for attach a new file in compose mail box.
    return new Promise(async(resolve, reject)=>{
        const [filechooser] = await Promise.all([
            tab.waitForFileChooser(), // this will wait to choose a file
            tab.click(".a1.aaA.aMZ") // this is the class for attach file
        ])
        await filechooser.accept(["C:/Users/Dell/Pictures/pic1.jpg"]); // this is the path of the file that is going to be attached
        resolve();
    });
}).then(function(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve();
        }, 10000);
    }) // wait for 5 sec, so that the file will upload perfectly
}).then(function(){
    let sendPromise = tab.click(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3"); // click on send button
    return sendPromise;
})
.then(function(){
    let waitIdPromise = tab.waitForSelector(".gb_Da.gbii", {visible : true});
    return waitIdPromise;
})
.then(function(){
    let profilePromise = tab.click(".gb_Da.gbii");
    return profilePromise;
}).then(function(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve();
        }, 7000);
    }) // waiting for completion of sending file
}).then(function(){
    let signoutPromise = tab.click(".gb_Db.gb_Vf.gb_4f.gb_Re.gb_4c"); // clicking on signout
    return signoutPromise; 
}).then(function(){
    let waitForPagePromise = tab.waitForSelector(".BHzsHc",{visible:true});
    return waitForPagePromise;
}).then(function(){
    let pageOpentwicePromise = tab.click(".BHzsHc");
    return pageOpentwicePromise;
})

//for 2nd mail operation
.then(function(){
    let waitPromise = tab.waitForSelector(".whsOnd.zHQkBf ", {visible:true});
    return waitPromise;
}).then(function(){
    let allclassPromise = tab.click(".whsOnd.zHQkBf");
    return allclassPromise;
}).then(function(){
    let idPromise = tab.type("#identifierId",id2,{delay:200}); //  login id
    return idPromise;
}).then(function(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}).then(function(){
    let nextbtnPromise = tab.click(".VfPpkd-RLmnJb");
    return nextbtnPromise;
}).then(function(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}).then(function(){
    let pwdclassPromise = tab.click(".whsOnd.zHQkBf");
    return pwdclassPromise;
}).then(function(){
    let pwdPromise = tab.type(".whsOnd.zHQkBf",pwd2,{delay:200}); // log in password
    return pwdPromise;
}).then(function(){
    let nextbtnPromise = tab.click(".VfPpkd-RLmnJb"); // click on next button
    return nextbtnPromise;
}).then(function(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve();
        }, 5000);
    })
 }).then(function(){
     let primaryPromise = tab.waitForSelector(".yW",{visible:true});
     return primaryPromise;
 }).then(function(){
    let primaryMailPromise = tab.click(".yW"); // clicking on primary in mail
    return primaryMailPromise;
}).then(function(){
    let replywaitPromise = tab.waitForSelector(".T-I.J-J5-Ji.T-I-Js-IF.aaq.T-I-ax7.L3",{visible:true});
    return replywaitPromise;
}).then(function(){
    let replyClickPromise = tab.click(".T-I.J-J5-Ji.T-I-Js-IF.aaq.T-I-ax7.L3"); // clicking on reply 
    return replyClickPromise;
}).then(function(){
    let mesgWaitPromise = tab.waitForSelector(".Am.aO9.Al.editable.LW-avf.tS-tW",{visible:true});
    return mesgWaitPromise;
}).then(function(){
    let msgBoxClickPromise = tab.click(".Am.aO9.Al.editable.LW-avf.tS-tW"); // click inside message box
    return msgBoxClickPromise;
}).then(function(){
    let messagePromise = tab.type(".Am.aO9.Al.editable.LW-avf.tS-tW",mailText2,{delay:300}); // getting the text from def.js file for typing message in reply box
    return messagePromise;
}).then(function(){
    let sendPromise = tab.click(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3"); // click on send button
    return sendPromise;
}).then(function(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve();
        }, 10000);
    })
 }).then(function(){
     let id2Promise = tab.click(".gb_Da.gbii"); // after 10 sec go  to profile
     return id2Promise;
 }).then(function(){
     let signoutwaitPromise = tab.waitForSelector(".gb_Db.gb_Vf.gb_4f.gb_Re.gb_4c",{visible:true});
     return signoutwaitPromise;
 }).then(function(){
     let signoutPromise = tab.click(".gb_Db.gb_Vf.gb_4f.gb_Re.gb_4c"); // click on sign out
     return signoutPromise;
 })
.catch(function(err) {
    console.log(err);
});