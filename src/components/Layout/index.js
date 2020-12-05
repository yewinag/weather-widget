import styled from 'styled-components';

const Layout = styled.div`    
    display: ${props => props.flex ? "flex" : "block"};;      
    margin-bottom: ${props => props.margin ? "20px" : "0"};
    justify-content: ${props => props.justify ? "space-between" : ""};
    min-height: ${props => props.section && "400px"};
    border: ${props => props.section && "1px solid #ddd"};
    padding: ${props => props.section && "20px"};
`;

export default Layout;