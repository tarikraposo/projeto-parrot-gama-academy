import Willy from "../../assets/willy.png";
import Container from "./styles";


let date: Date = new Date();

const feedList = [

	{	
		postID: 1,
		autorId:1,
		name: "Pedro",
        date,
		apartament: 101,
		message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam."

	},
    {	
		postID: 2,
		autorId:1,
		name: "Pedro",
        date,
		apartament: 101,
		message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laboriosam."

	},
    
    
]



type FeedListProps = {
    children: React.ReactNode;

}

const FeedList = (props:FeedListProps)=> {
    return (
        <Container>
            <div className="postContainer">
                {feedList.map((post) => {
                    return(
                        <div className="feedPost">
                            <img src={Willy} alt="Profile icon"/>
                            <div key={post.postID}>
                                <p className="name">{post.name} - {post.apartament}</p>
                                <span className="date">25/10/2022</span>
                                <p className="message">{post.message}</p>
                            </div>
                        </div>
                                                
                    );
                })}
            </div>
        </Container>
    );
};

export default FeedList;