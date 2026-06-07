import styled from "styled-components";

export const AdminPage = styled.section`
  min-height: calc(100vh - 80px);
  padding: 70px 48px 96px;
  background: #f7f8ff;
  color: #222;
  font-family: Pretendard, sans-serif;
`;

export const Header = styled.header`
  width: min(1120px, 100%);
  margin: 0 auto 28px;
`;

export const Kicker = styled.p`
  margin: 0 0 10px;
  color: #4359fc;
  font-size: 15px;
  font-weight: 900;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 34px;
  font-weight: 900;
  line-height: 1.32;
`;

export const Desc = styled.p`
  margin: 12px 0 0;
  color: #6c7280;
  font-size: 16px;
  font-weight: 600;
`;

export const Panel = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto 18px;
  padding: 24px;
  border: 1px solid #e1e5f2;
  border-radius: 18px;
  background: #fff;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 900;
`;

export const LearnTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LearnTab = styled.button`
  min-width: 118px;
  height: 42px;
  padding: 0 18px;
  border: 1px solid ${({ $active }) => ($active ? "#4359fc" : "#dde2f0")};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "#4359fc" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#3b4151")};
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
`;

export const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 112px 112px;
  gap: 10px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchInput = styled.input`
  height: 52px;
  padding: 0 18px;
  border: 1px solid #dde2f0;
  border-radius: 12px;
  background: #fff;
  color: #222;
  font-size: 15px;
  font-weight: 700;
  outline: 0;

  &:focus {
    border-color: #4359fc;
    box-shadow: 0 0 0 4px rgba(67, 89, 252, 0.1);
  }
`;

export const SearchButton = styled.button`
  height: 52px;
  border: 0;
  border-radius: 12px;
  background: #4359fc;
  color: #fff;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    background: #aeb6ff;
    cursor: default;
  }
`;

export const ShowAllButton = styled.button`
  height: 52px;
  border: 1px solid #dde2f0;
  border-radius: 12px;
  background: #fff;
  color: #4359fc;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    color: #aeb6ff;
    cursor: default;
  }
`;

export const Message = styled.p`
  margin: 14px 0 0;
  color: #4359fc;
  font-size: 14px;
  font-weight: 800;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 18px;
  width: min(1120px, 100%);
  margin: 0 auto;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const ResultPanel = styled(Panel)`
  width: 100%;
  margin: 0;
`;

export const RegisteredPanel = styled(Panel)`
  width: 100%;
  margin: 0;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px;
`;

export const ResultHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;

  ${SectionTitle} {
    margin-bottom: 0;
  }
`;

export const ResultCount = styled.span`
  color: #6c7280;
  font-size: 13px;
  font-weight: 900;
`;

export const SignWordCard = styled.article`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 14px;
  padding: 14px;
  border: 1px solid #e1e5f2;
  border-radius: 14px;
  background: #fff;
`;

export const Thumb = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 12px;
  object-fit: cover;
  background: #f0f2ff;
`;

export const CardBody = styled.div`
  min-width: 0;
`;

export const Category = styled.span`
  display: inline-flex;
  min-height: 24px;
  align-items: center;
  padding: 0 9px;
  border-radius: 999px;
  background: #eef1ff;
  color: #4359fc;
  font-size: 12px;
  font-weight: 900;
`;

export const CardTitle = styled.h3`
  margin: 9px 0 6px;
  font-size: 17px;
  font-weight: 900;
`;

export const CardDesc = styled.p`
  display: -webkit-box;
  min-height: 38px;
  margin: 0 0 12px;
  overflow: hidden;
  color: #6c7280;
  font-size: 13px;
  line-height: 1.45;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const RegisterButton = styled.button`
  height: 34px;
  padding: 0 13px;
  border: 0;
  border-radius: 10px;
  background: ${({ disabled }) => (disabled ? "#eef1ff" : "#4359fc")};
  color: ${({ disabled }) => (disabled ? "#8190dc" : "#fff")};
  font-size: 13px;
  font-weight: 900;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export const LoadMoreButton = styled.button`
  display: block;
  width: 180px;
  height: 46px;
  margin: 22px auto 0;
  border: 1px solid #dde2f0;
  border-radius: 999px;
  background: #fff;
  color: #4359fc;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    color: #aeb6ff;
    cursor: default;
  }
`;

export const RegisteredList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const RegisteredItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #f7f8ff;
  font-size: 14px;
  font-weight: 900;

  small {
    color: #4359fc;
    font-size: 12px;
    font-weight: 900;
  }
`;

export const Empty = styled.li`
  padding: 18px 14px;
  border-radius: 12px;
  background: #f7f8ff;
  color: #8a90a2;
  font-size: 14px;
  font-weight: 800;
`;
