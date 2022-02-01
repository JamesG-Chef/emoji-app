

const  = () => {
    useEffect(() => {
        fetch(`https://emojihub.herokuapp.com/api/random`)
          .then((res) => res.json())
        .then((emoji) => emoji)
      }, [])
    return (  );
}
 
export default ;


  