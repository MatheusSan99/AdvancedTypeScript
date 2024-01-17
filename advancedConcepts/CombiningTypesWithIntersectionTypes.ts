class Grid {
    Width : number = 0;
    Height : number = 0;
    Padding?: number;
}
class Margin {
    Left : number = 0;
    Top : number = 0;
    Width : number = 10;
    Height : number = 20;
    Padding?: number;
}

// What we are going to create is an intersection that will end up with Width and Height from the Grid property, along with Left and Top from Margin. To do this, we are going to create a function that takes in Grid and Margin and returns a type that contains all of these properties, as follows:
function ConsolidatedGrid(grid : Grid, margin : Margin) : Grid  & Margin {
    let consolidatedGrid = <Grid & Margin>{...margin};
    consolidatedGrid.Width += grid.Width;
    consolidatedGrid.Height += grid.Height;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : 
    grid.Padding;
    return consolidatedGrid;
}