import React, {useState} from 'react';

function Card (props) {
    const [toggled, setToggled] = useState(false);

    const handleToggleBody  = () => {
        setToggled(!toggled)
    }

    return (<section >
        <h3  onMouseOver={handleToggleBody}>
            {props.title}
        </h3>

        {toggled && <article >
            {props.body}
        </article>}
    </section>)
}

export default Card;