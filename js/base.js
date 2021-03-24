$(function () {
        $('[data-toggle="popover"]').popover()

        const availableTags = [
          'ActionScript',
          'AppleScript',
          'Asp',
          'BASIC',
          'C',
          'C++',
          'Clojure',
          'COBOL',
          'ColdFusion',
          'Erlang',
          'Fortran',
          'Groovy',
          'Haskell',
          'Java',
          'JavaScript',
          'Lisp',
          'Perl',
          'PHP',
          'Python',
          'Ruby',
          'Scala',
          'Scheme'
        ];
        //Autocomplete baseado em classes
        $('.tags').autocomplete({
          source: availableTags
        });
      });