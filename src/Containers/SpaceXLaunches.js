import React from "react";
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Error from '../Components/Error'
import Loading from '../Components/Loading'
import ItemCard from '../Components/ItemCard'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  launchesContainer:{
    display:"grid",
    alignItems: "center",
    justifyItems: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridColumnGap:"0.5em",
    gridRowGap:"0.5em",
    width: "100%",
    maxWidth:"800px",
    boxSizing:"border-box",
    margin:"auto"
  }
})

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
    const classes = useStyles()
    return (<Query query={GET_LAUNCHES}>
        {
            ({ loading, error, data, refetch }) => {
                console.log(data)
                if (loading) return <Loading />
                if (error) return <Error error={error} />
                return <div className={classes.launchesContainer}>
                    {
                        data.launches.map(launch=>{
                            return <ItemCard key={launch.id} launch={launch}/>
                        })
                    }
                </div>
            }
        }
    </Query>)
}

export default SpaceXLaunches;