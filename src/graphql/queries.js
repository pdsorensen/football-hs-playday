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
      end_time
      final_score_white
      final_score_red
      player_defence_red {
        nickname
        photo_url
      }
      player_defence_white {
        nickname
        photo_url
      }
      player_offence_red {
        nickname
        photo_url
      }
      player_offence_white {
        nickname
        photo_url
      }
    }
  }`
  ;

