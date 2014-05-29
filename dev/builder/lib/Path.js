var path = require( 'path' );

function Path( name, base ) {
    this.parts = path.resolve( name ).split( path.sep );

    if ( typeof base === 'string' ) {
        this.base = new Path( base );
    } else if ( base instanceof Path ) {
        // clone rather than keep reference, because of memory leaks
        this.base = base;
    } else {
        this.base = null;
    }
}

Path.prototype = {
    matchLeft: function ( arr ) {
        var i = 0,
            partsNumber = this.parts.length;

        if ( arr instanceof Path ) {
            arr = Array.prototype.slice.call( arr.parts );
        }

        var last = arr.shift();

        while( typeof last === 'string' ) {

            // Provided path is longer that checked one.
            if ( i >= partsNumber ) {
                return false;
            }

            // Don't want to check '*'
            if ( last === '*' ) {
                i++;
                last = arr.shift();
                continue;
            }

            // Doesn't match
            if ( this.parts[ i ] !== last ) {
                return false;
            }

            i++;
            last = arr.shift();
        }

        return true;
    }
};

module.exports = Path;