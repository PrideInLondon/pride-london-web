import styled from 'styled-components'
import theme from '../../theme/theme'

export const AuthorCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`
export const Thumbnail = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 45px;
  background-blend-mode: multiply;
  background-image: linear-gradient(
    to bottom,
    ${theme.colors.lightGrey},
    ${theme.colors.lightGrey}
  );
`
export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-family: Poppins;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: ${theme.colors.darkGrey};
`
export const Job = styled.div`
  font-size: 14px;
  line-height: 1.43;
`
export const FullName = styled.div`
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 6px;
`
