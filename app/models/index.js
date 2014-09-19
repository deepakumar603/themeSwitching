import DS from 'ember-data';

var Index = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Index.reopenClass({
  FIXTURES: [
    {
      id: "1",
      themeid: 'theme1',
      themeData: 'This is data of Blogpost 1'
    }, {
      id: "2",
      themeid: 'theme2',
      themeData: 'This is data of Blogpost 2'
    }, {
      id: "3",
      themeid: 'theme3',
      themeData: 'This is data of Blogpost 3'
    }
]});

export default Index;