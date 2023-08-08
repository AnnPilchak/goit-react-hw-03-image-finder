import styled from "styled-components";

const Item = styled.li`
    height: 260px;
`;

const Image = styled.img`
    width: 100%;
    height: 260px;

    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    margin: 0;

    &:hover {
        transform: scale(1.03);
        cursor: zoom-in;
    }
`;

export { Item, Image };