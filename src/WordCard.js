import CharacterCard from "./CharacterCard";

export default class WordCard extends Coponent{
    render(){
        return(
            <div>
                {Array.from(this.props.value).map((c,i)=><CharacterCard value={c} key={i}/>)}
                </div>
        );
    }
}