const Ingredient = ({amount, messurement, name}) =>
    <li>
        <span className="amount">{amount}</span>
        <span className="messurement">{messurement}</span>
        <span className="name">{name}</span>
    </li>

export default Ingredient
