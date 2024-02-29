const checkvowels = (mystr) => {
    count = 0

    for(let i of mystr)
    {
        if(i==='a' || i==='e' || i==='i' || i==='o' || i==='u' )
        {
            count=count+1
        }
    }
    console.log("Total vowels===>",count)

}

checkvowels("Hello")
