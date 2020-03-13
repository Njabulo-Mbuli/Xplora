import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Error from '../Components/Error'
import Loading from '../Components/Loading'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  label:{
    margin:"0.5em"
  },
  info:{
    width:"60%",
    minWidth:"300px",
    margin:"auto",
    padding:"1em",
    boxSizing:"border-box"
  }
})

const LaunchDetails = ({ match }) => {
  const classes = useStyles()
  const launchId = match.params.id
  const GET_LAUNCH_DETAILS = gql`
    {
        launch(id: "${launchId}") {
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
  return (<Query query={GET_LAUNCH_DETAILS}>
    {
      ({ loading, error, data, refetch }) => {
        if (loading) return <Loading />
        if (error) return <Error error={error} />
        
        const date = new Date(data.launch.launch_date_local)
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
        const [{ value: month }, , { value: day }, , { value: year }] = dtf.formatToParts(date)
        
        return <>
          <div>
            <div>
              <img src={data.launch.links.mission_patch_small} />
              <div className={classes.info}>
                <h1>{data.launch.mission_name}</h1>
                <div className={classes.label}>
                  <p>Rocket Name: {data.launch.rocket.rocket_name}</p>
                </div>
                <hr/>
                <div className={classes.label}>
                  <p>Rocket Type: {data.launch.rocket.rocket_type}</p>
                </div>
                <hr/>
                <div className={classes.label}>
                  <p>Launch Date: {`${day} ${month} ${year}`}</p>
                </div>
                <hr/>
                <div className={classes.label}>
                  <p>Rocket Height: {data.launch.rocket.rocket.height.meters} meters</p>
                </div>
                <hr/>
                <div className={classes.label}>
                  <p>Boosters: {data.launch.rocket.rocket.boosters}</p>
                </div>
                <hr/>
                <div className={classes.label}>
                  <p>Number of Landing Legs: {data.launch.rocket.rocket.landing_legs.number}</p>
                </div>
                <hr/>
                <div className={classes.label}>
                  <p>Landing Legs Material: {data.launch.rocket.rocket.landing_legs.material}</p>
                </div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "justify" }}>{data.launch.details}</p>
        </>
      }
    }
  </Query>
  )
}

export default LaunchDetails