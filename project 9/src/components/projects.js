import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">

          <Card shadow={5} style={{margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', backgroundColor: '#45cefc'}} >Detecting and Removing Bias in Financial Word Embedding Model
</CardTitle>
            <CardText>
            Quantified and evaluated the gender bias in word embedding model with PCA method. Debiased the embedding model with neutralization, equalization and soften algorithms, resulting in the reduction of evident gender bias term occurrence from 23% to 5% while maintaining the baseline performance metrics of embedding 
            </CardText>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', backgroundColor: '#24b3f0'}} >Intelligent Analysis System of City Appearance Image Recognition Based on Deep Learning</CardTitle>
            <CardText>
            Provided a machine learning based solution to streamline picture labeling of waste for a urban environmental service company.
            Designed, developed, and trained a Yolo v3 and ResNet based deep learning model to automatically detect and classify city waste from pictures, which achieved close to human labeler accuracy of 92%.
            </CardText>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            
            <CardTitle style={{color: '#fff', height: '170px', backgroundColor: '#cf71c9'}} >Research on Social Mentality Recognition Using Machine Learning Artificial Intelligence </CardTitle>
            <CardText>
            Crawled 10k+ public comment data of trending events from Chinese twitter and to perform text analysis on them, and generated compelling word cloud graphs for better visualization.
            Conducted sentiment analysis and proposed a BERT-enhanced model to study and classify the social attitudes towards hot events into five groups, reaching an accuracy of 74% from 33%
            </CardText>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '170px', backgroundColor: '#af66d1'}} >Unbiased Learning to Rank Algorithm (ULTRA)</CardTitle>
            <CardText>
            Implemented unbiased and neural learning-to-rank algorithms on social media data to eliminate bias in search relevancy
            </CardText>
          </Card>
                    
          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '170px', backgroundColor: '#8e31cd'}} >Efficient Mechanism Design for Federated Learning</CardTitle>
            <CardText>
            Employed game theory to design an incentive mechanism to encourage more independent smartphone users to engage in federated training, so as to build a shared prediction model for more intelligent input method
            </CardText>
          </Card>
        </div>
        


      )
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
