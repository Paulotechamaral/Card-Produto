/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useState } from 'react';

//Estilos feitos com Emotion
const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nome = styled.h2`
    font-size: 1.5em;
    margin: 0 0 8px;
`;

const Preco = styled.p`
    font-size: 1.2em;
    color: #333;
`;

const Botao = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export default function CardProduto() {
    const [adicionado, setAdicionado] = useState(false);
    
    const handleClick = () => {
        const som = new Audio(adicionado ? 'Rosnado.mp3' : 'Latido.mp3');
        som.play();
        setAdicionado(!adicionado);
    };

return (
    <Card>
        <Nome>Produto 1</Nome>
        <Preco>R$ 100,00</Preco>
        <Botao adicionado={adicionado} onClick={handleClick}>
            {adicionado ? 'Remover do Carrinho' : 'Adicionar ao Carrinho'}
        </Botao>
    </Card>
);
};