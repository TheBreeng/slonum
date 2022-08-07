import './BenefitCard.scss';

const BenefitCard = ({ props }: any) => {
    return (
        <div className="BenefitCard">
            <img src={props.img} alt={props.alt} />
            <p>
                {props.text}{' '}
                {props.link && <a href={props.link.url}>{props.link.text}</a>}
            </p>
        </div>
    );
};

export default BenefitCard;
