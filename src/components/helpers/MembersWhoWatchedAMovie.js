import { useEffect } from "react";

const MembersWhoWatchedAMovie = ({movieId='m1'}) => {
    const subscriptionsArray = [
        {id:1, member_id:'1',movies:[{id:'m4', date:"29-02-2023"},{id:'m2', date:"29-02-2023"}]},
        {id:2, member_id:'2',movies:[{id:'m1', date:"29-02-2023"},{id:'m3', date:"29-02-2023"}]},
        {id:3, member_id:'3',movies:[{id:'m1', date:"29-02-2023"},{id:'m2', date:"29-02-2023"}]},
        ]
        let membersListOfMovie = [];
        useEffect(() => {
            console.log("movieId: " + movieId);
            subscriptionsArray.forEach(subscription =>
            {
                const found = subscription.movies.findIndex(movie => movie.id === movieId)
                if(found !== -1) {
                    membersListOfMovie.push(subscription.member_id)
                }
            }

            )
            console.log(membersListOfMovie);
        },[])
  return (
    <div>
        This is all the ids of members who wached movie with id {movieId}:
        <ul>
            {membersListOfMovie.map(member => <li key={member}>{member}</li>)}
        </ul>
    </div>
  )
}

export default MembersWhoWatchedAMovie