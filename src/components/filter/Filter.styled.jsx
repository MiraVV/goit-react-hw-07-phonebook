import styled from '@emotion/styled';

export const FilterContainer = styled.div``;

export const FilterName = styled.label`
  display: flex;
  margin-top: 40px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const FilterInput = styled.input`
  // display: flex;
  :focus {
    outline: none;
    border-radius: 3px;
    border: 4px solid #6495ed;
  }
`;
