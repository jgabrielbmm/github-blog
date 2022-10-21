import { CreatorInfo } from "./components/CreatorInfo";
import {
  HomeContainer,
  InputBase,
  PostSession,
  PostSummary,
  PostSummaryHeader,
  PublicationContainer,
  SearchContainer
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <CreatorInfo />

      <SearchContainer>
        <PublicationContainer>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </PublicationContainer>
        <InputBase type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>
      <PostSession>
        <PostSummary>
          <PostSummaryHeader>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </PostSummaryHeader>
          <p>
            Programming languages all have built-in data structures,
            but these often differ from one language to another. This article
            attempts to list the built-in data structures available...
          </p>
        </PostSummary>
        <PostSummary>
          <PostSummaryHeader>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </PostSummaryHeader>
          <p>
            Programming languages all have built-in data structures,
            but these often differ from one language to another. This article
            attempts to list the built-in data structures available...
          </p>
        </PostSummary>
        <PostSummary>
          <PostSummaryHeader>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </PostSummaryHeader>
          <p>
            Programming languages all have built-in data structures,
            but these often differ from one language to another. This article
            attempts to list the built-in data structures available...
          </p>
        </PostSummary>
        <PostSummary>
          <PostSummaryHeader>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </PostSummaryHeader>
          <p>
            Programming languages all have built-in data structures,
            but these often differ from one language to another. This article
            attempts to list the built-in data structures available...
          </p>
        </PostSummary>
      </PostSession >

    </HomeContainer >
  )
}