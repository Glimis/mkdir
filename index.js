var fs=require('fs'),
    path=require('path');

export function mkdir(dirpath,dirname){  
        //第一次
        if(typeof dirname === "undefined"){   
            if(fs.existsSync(dirpath)){  
                return;  
            }else{  
                mkdir(dirpath,path.dirname(dirpath));  
            }  
        }else{  
            if(dirname !== path.dirname(dirpath)){   
                mkdir(dirpath);  
            }else if(fs.existsSync(dirname)){  
                fs.mkdirSync(dirpath)  
            }else{  
                //由后往前创建
                mkdir(dirname,path.dirname(dirname));  
                fs.mkdirSync(dirpath);  
            }  
        }  
}  

