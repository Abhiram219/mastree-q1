import React, {useState, useEffect} from "react";
import { Input, Button, Card } from "antd";

import 'antd/dist/antd.css';

const URLDecoder = () => {

    const [urlInput, setUrlInput] = useState();
    const [output, setOutput] = useState({});

    const onChange = (e) => {
        setUrlInput(e.target.value);
    }

    const generateURLJSON = () => {

        try{
            const url = new URL(urlInput);

            let json = {};

            if(url.hash){
                json.hash = url.hash;
            }
            
            if(url.hostname){
                json.hostname = url.hostname;
            }
            if(url.host){
                json.host = url.host;
            }
            if(url.href){
                json.href = url.href;
            }
            if(url.origin){
                json.origin = url.origin;
            }
            if(url.password){
                json.password = url.password;
            }
            if(url.pathname){
                json.pathname = url.pathname;
            }
            if(url.search){
                json.search = url.search;
            }
            if(url.port){
                json.port = url.port;
            }
            if(url.protocol){
                json.protocol = url.protocol;
            }
            if(url.searchParams){
                json.searchParams = url.searchParams;
            }
            if(url.username){
                json.username = url.username;
            }

            console.log(json);
            setOutput(json);

            
        }catch(error){
            console.log( error);
            alert("Entered URL is invalid ")
            setUrlInput('');
        }
        
    }


    return(
        <Card bordered={false} style={{ minWidth: 300 }}>
            <div>
                <Input placeholder="Paste URI Here" allowClear value={urlInput} onChange={onChange} />

                <Button type="primary" style={{marginTop: 16}} onClick={generateURLJSON}> Generate JSON </Button>

                {Object.keys(output).length>0 && 
                    <div>
                        {Object.keys(output).map( (item) => {
                            console.log(item);
                            return <p> {item} : {output[item]} </p>
                        } )}
                    </div>
                }
            </div>
        </Card>
        
    )
}

export default URLDecoder;


