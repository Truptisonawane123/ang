http=require("http");
fs=require("fs");
url=require("url");
query=require("querystring");
stud=require("./perccalculate")
function process(req,res)
{
	u=url.parse(req.url);
	console.log(u);
	
	switch(u.pathname)
	{
	
		case"/":
			fs.readFile("studentmark.html",function(err,data){
				if(err)
				{
					res.end("error occurred");
				}
				
				else
				{
					res.end(data);
				}
			
			
			});
			break;
			
		case"/calculate":
		
					data=query.parse(u.query);
					res.end("Student name:"+data.nm+"\nStudent category:"+data.cat+"\nPercentage:"+stud.f1(data.cat,data.math,data.phy,data.chem));
					break;
	}
}
s=http.createServer(process);
s.listen(8000);
console.log("Server started at port no 8000");
