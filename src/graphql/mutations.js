export const DeletePlayer = `
    mutation deletePlayer($id: String!) {
        deletePlayer(id: $id)
    }
`;

export const CreatePlayer = `
    mutation createPlayer($input: PlayerInput!) {
        createPlayer(input: $input) {
            id
            created_on
            name
            nickname
            photo_url
        }
    }
`;

export const StartMatch = `
mutation CreateMatch ($input: MatchInput!) {
    startMatch(input: $input) {
        id
        start_time
        is_active
    }
}
`
export const EndMatch = `
mutation EndMatch($id: String) {
    forceEndActiveMatch {
      id
    }
  }
`
