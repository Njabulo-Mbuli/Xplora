import React from "react";
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Error from '../Components/Error'
import Loading from '../Components/Loading'
import ItemCard from '../Components/ItemCard'

const GET_LAUNCHES = gql`
{
    launches {
      mission_name
      upcoming
      id
      launch_date_local
      links {
        mission_patch_small
      }
    }
  }
  `
const SpaceXLaunches = () => {
    return (<Query query={GET_LAUNCHES}>
        {
            ({ loading, error, data, refetch }) => {
                console.log(data)
                if (loading) return <Loading />
                if (error) return <Error error={error} />
                return <>
                    {
                        data.launches.map(launch=>{
                            return <ItemCard key={launch.id} launch={launch}/>
                        })
                    }
                </>
            }
        }
    </Query>)
}

export default SpaceXLaunches;


const LAUNCHES_QUERY = gql`
{
    launches(limit:"10"){
      links {
        article_link
        mission_patch_small
        reddit_campaign
        reddit_launch
        reddit_media
        reddit_recovery
        video_link
        wikipedia
        flickr_images
      }
      mission_id
      mission_name
      rocket {
        rocket {
          active
          mass {
            kg
          }
          name
          payload_weights {
            kg
            id
          }
          success_rate_pct
          company
          boosters
          height {
            meters
          }
          landing_legs {
            number
            material
          }
        }
        rocket_name
        rocket_type
      }
      details
      launch_date_local
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_success
      upcoming
    }
  }
`