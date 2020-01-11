function student(cat,n1,n2,n3)
{	
	sum=parseInt(n1)+parseInt(n2)+parseInt(n3);
	console.log(cat);
	if(cat==="Sports")
	{
		sum=sum+5;	
	}		 
	 total=(sum/300);
	 percent=total*100;
	return percent;
}

exports.f1=student

