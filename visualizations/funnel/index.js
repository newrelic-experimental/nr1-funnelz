import React from 'react';
import PropTypes from 'prop-types';
import Funnel from './Funnel';
import {Card, CardBody, HeadingText, NrqlQuery, Spinner, AutoSizer,
  PlatformStateContext,} from 'nr1';

export default class FunnelVisualization extends React.Component {
  // Custom props you wish to be configurable in the UI must also be defined in
  // the nr1.json file for the visualization. See docs for more details.
  static propTypes = {
    direction: PropTypes.enum,
    gradient: PropTypes.enum,
    nrqlQueries: PropTypes.arrayOf(
      PropTypes.shape({
        accountId: PropTypes.number,
        query: PropTypes.string,
      })
    ),
  };

  
  render() {

    const {nrqlQueries } = this.props;

    // code to handle case where enum is null at first.  until user selects it 
    var direction = this.props.direction;
    if(direction == null)
        direction = "vertical"

    const dir = direction;

    var gradient = this.props.gradient;
    if(gradient == null)
        gradient = "vertical"

    const grad = gradient;

    // end handler for enums .*********************************
    const nrqlQueryPropsAvailable =
      nrqlQueries &&
      nrqlQueries[0] &&
      nrqlQueries[0].accountId &&
      nrqlQueries[0].query;


    if (!nrqlQueryPropsAvailable) {
      return <EmptyState />;
    }

    return (
      <PlatformStateContext.Consumer>
        {({timeRange}) => (
          <AutoSizer>
            {({width, height}) => (
              <NrqlQuery
                formatType={NrqlQuery.FORMAT_TYPE.RAW}
                query={nrqlQueries[0].query}
                timeRange={timeRange}
                accountId={parseInt(nrqlQueries[0].accountId)}
                pollInterval={NrqlQuery.AUTO_POLL_INTERVAL}
              >
                {({data, loading, error}) => {
                  if (loading) {
                    return <Spinner/>
                  }

                  if (error) {
                    return <ErrorState />;
                  }
                  return (
                      <Funnel 
                        width = {width*0.6}
                        height = {height}
                        direction = {dir}
                        labels = {data.metadata.contents[0].steps}
                        colors = {['#039595','red']}
                        values = {data.results[0].steps}
                        gradient = {grad}
                      />
                  );
                }}
              </NrqlQuery>
            )}
          </AutoSizer>
        )}
      </PlatformStateContext.Consumer>
    );
  }
}

const EmptyState = () => (
  <Card className="EmptyState">
    <CardBody className="EmptyState-cardBody">
      <HeadingText
        spacingType={[HeadingText.SPACING_TYPE.LARGE]}
        type={HeadingText.TYPE.HEADING_3}
      >
        Please provide at least one NRQL query & account ID pair
      </HeadingText>
      <HeadingText
        spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
        type={HeadingText.TYPE.HEADING_4}
      >
        An example NRQL query you can try is:
      </HeadingText>
      <code>FROM MobileBreadcrumb SELECT funnel(sessionId, WHERE name = 'login' AS 'Login', WHERE name='homepage' AS 'Homepage') since 1 day ago</code>
    </CardBody>
  </Card>
);

const ErrorState = () => (
  <Card className="ErrorState">
    <CardBody className="ErrorState-cardBody">
      <HeadingText
        className="ErrorState-headingText"
        spacingType={[HeadingText.SPACING_TYPE.LARGE]}
        type={HeadingText.TYPE.HEADING_3}
      >
        Oops! Something went wrong.
      </HeadingText>
    </CardBody>
  </Card>
);
