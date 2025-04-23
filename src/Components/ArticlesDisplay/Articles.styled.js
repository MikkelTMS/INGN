import styled from "styled-components";

export const ArticlesStyled = styled.section`

.news-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; 
    justify-content: center;
    align-items: stretch;
    padding: 20px;
}

.news-item {
    flex: 1 1 min(350px, 48%); 
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    text-decoration: none;
    color: black;
}

.news-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.news-content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.news-title {
    font-size: 1.2rem;
    font-weight: bold;
}

.news-date {
    color: gray;
    font-size: 0.9rem;
}

`
