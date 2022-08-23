import { CastItem, CastItemLi, CastItemImage, CastItemText, CastItemTextP } from "./CastPart.styled";

const CastPart = ({ casts }) => {
    return (
        <CastItem>
            {casts.map(cast => (
                <CastItemLi key={cast.id}>
                    {cast.profile_path ? (
                    <CastItemImage
                    src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                    alt={cast.name}
                />
                ) : (
                    <CastItemImage src={"https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png"} alt={cast.name} />
                )}
                    <CastItemText>
                    <CastItemTextP>{cast.name}</CastItemTextP>
                    <CastItemTextP>{cast.character}</CastItemTextP>
                    </CastItemText>
                </CastItemLi>
      ))}
    </CastItem>
    );
}

export default CastPart;