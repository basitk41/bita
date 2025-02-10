import { JokeText, JokeWidgetWrapper } from "./index.styles";
import Button from "@/components/design-components/button";
import Spinner from "../design-components/spinner";
import { useJokeAPIQuery } from "@/queries/useJokeAPIQuery";

const JokeWidget = () => {
  const {
    data: joke,
    isLoading: loading,
    isError: error,
    refetch,
  } = useJokeAPIQuery();

  return (
    <JokeWidgetWrapper>
      <h2>Joke of the Moment</h2>

      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <JokeText>
            {joke?.type === "single" ? joke?.joke : joke?.setup}
          </JokeText>
          <JokeText>{joke?.type === "single" ? "" : joke?.delivery}</JokeText>
          <JokeText>{"😂😂"}</JokeText>
          <Button onClick={() => refetch()}>Get Another Joke</Button>
        </>
      )}
    </JokeWidgetWrapper>
  );
};

export default JokeWidget;
