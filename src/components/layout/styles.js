import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const SideBar = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #f6f4fa;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Button = styled(Link)`
  margin-right: 30px;
`;
