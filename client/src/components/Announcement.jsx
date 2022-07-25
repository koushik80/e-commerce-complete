import styled from 'styled-components';

const Container = styled.div`
     height: 30px;
     background-color: #e5dcd6;
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: 14px;
     font-weight: 800;
     color: light;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free shipping on orders over 60€
    </Container>
  );
};

export default Announcement;
