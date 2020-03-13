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