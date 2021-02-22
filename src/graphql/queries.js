export const GetPlayers = `
    query getPlayers {
        getPlayers {
            created_on
            id
            nickname
            photo_url
            name
        }
    }`
    ;

export const GetMatches = `
query getMatches {
    getMatches {
      id
      is_active
      start_time
    }
  }`
    ;

