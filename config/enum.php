<?php

return [
    'totImportati' => 0,

    'ruoli' => [
        'admin' =>'admin',
        'audio' => 'audio',
        'segreteria' =>'segreteria'
    ],

    'categoria_listino' => ['APA', 'ACC', 'SERVIZI'],

    'statoAPA' => [
        'ddt' =>'DDT',
        'reso' => 'RESO',
        'prova' =>'PROVA',
        'fattura' =>'FATTURA',
        'filiale' =>'FILIALE',
        'richiesto' =>'RICHIESTO',
    ],

    'ancona' => [ 'ANCONA', 'SENIGALLIA', 'JESI', 'FABRIANO',
        'FALCONARA MARITTIMA', 'FALCONARA', 'OSTRA', 'AGUGLIANO', 'ALBACINA', 'ARCEVIA', 'BARBARA',
        'BELVEDERE OSTRENSE', 'CAMERATA PICENA', 'CASTEL COLONNA', 'CASTELBELLINO', 'CASTELFERRETTI',
        'CAMERANO', 'CASTELPLANIO', 'CHIARAVALLE', 'CORINALDO', 'CUPRAMONTANA', 'MAIOLATI SPONTINI',
        'MARINA DI MONTEMARCIANO', 'MERGO', 'MOIE', 'MONSANO', 'MONTE SAN VITO', 'MONTEROBERTO', 'MONTESICURO',
        'NUMANA', 'OFFAGNA', 'OSTRA VETERE', 'POLVERIGI', 'SAN MARCELLO', 'SANTA MARIA NUOVA', 'TORRETTE',
        'TRECASTELLI', 'SIROLO', 'GENGA', 'MONTEMARCIANO', 'COLLINE DI SANTA MARIA NUOVA'],

    'cortona' => ['CAMUCIA', 'CASTIGLION FIORENTINO',
        'POZZO DELLA CHIANA', 'PIEVE AL TOPPO', 'RIGUTINO', 'BADIA AL PINO', 'CIVITELLA IN VAL DI CHIANA',
        'ALBERORO','CAPOLONA', 'CASTIGLION FIBOCCHI', 'CASTIGLIONE DEL LAGO', 'CORTONA', 'CORCIANO', 'CHITIGNANO', 'CESA',
        'FOIANO DELLA CHIANA', 'GUBBIO', 'LUCIGNANO', 'MONTE SAN SAVINO', 'MARCIANO DELLA CHIANA', 'MONTEVARCHI',
        'PIEVE SANTO STEFANO', 'SAN LEO', 'TEGOLETO', 'TERONTOLA', 'VITIANO', 'SARTEANO'],

    'ascoli' => ['ASCOLI PICENO', 'COMUNANZA', 'SAN BENEDETTO DEL TRONTO', 'ASCOLI', 'S. BENEDETTO DEL TRONTO',
        'S. BENEDETTO', 'TERAMO', 'ALBA ADRIATICA', 'GIULIANOVA', 'MARTINSICURO'],

    'civitanova' => ['LORETO', 'OSIMO', 'APIRO',
        'POTENZA PICENA', 'MONTEGIORGIO', "PORTO SANT'ELPIDIO", "PORTO S.ELPIDIO", 'MONTEGRANARO', 'RECANATI',
        'CIVITANOVA MARCHE', 'CIVITANOVA', 'FERMO', 'PORTO SAN GIORGIO', "PORTO S. GIORGIO", 'FARMACIA CARDINALI',
        'ACI LORETO', 'ALTIDONA',
         'ATHANASIA', 'BOLOGNOLA', 'CASTELFIDARDO', 'CASTELRAIMONDO', 'CESSAPALOMBO', 'CINGOLI',
        'FALERONE', 'FIASTRA', 'FILOTTRANO', 'MATELICA', 'MONTE SAN GIUSTO', 'MONTECOSARO',
        'MORESCO', 'MORROVALLE', 'MUMMUIOLA', 'PONZANO DI FERMO', 'PORTO POTENZA PICENA', 'PORTO RECANATI',
        'SAN GINESIO', 'SAN SEVERINO MARCHE', 'SARNANO', 'TOLENTINO', 'STAFFOLO',
        'SERVIGLIANO', 'FIUMINATA', 'MACERATA', 'CAMERINO', 'APPIGNANO', 'CORRIDONIA',
        'LORO PICENO', 'MOGLIANO', 'MONTECASSIANO', 'PASSO DI TREIA', 'POLLENZA', 'SAMBUCHETO', 'TREIA',
        'URBISAGLIA'],

    'firenze' => ['FIRENZE', 'BAGNO A RIPOLI', 'GRASSINA', 'FIESOLE', 'SESTO FIORENTINO',
        'SCANDICCI', 'SIGNA', 'IMPRUNETA'],

    'lucca' => ['LUCCA', 'BARGA', 'PORCARI', 'GRAGNANO', 'GRAGNANO(LUCCA)', 'LAPPATO', 'ANTRACCOLI(LUCCA)',
        'CAPANNORI', 'SANTA MARIA A COLLE', 'ZONE', 'SANTA ANDREA IN CAPRILE', 'MARLIA', 'SAN COLOMBANO',
        'CAPANNORI(MARLIA)', 'CAMIGLIANO', 'CAMIGLIANO(CAPANNORI)', 'SEGROMIGNO IN PIANO', 'SAN MACARIO IN PIANO(LUCCA)',
        'GRAGNANO(CAPANNORI)', 'NOZZANO(SAN PIETRO) LUCCA', 'TEMPAGNANO(LUCCA)', 'SEGROMIGNO IN MONTE', 'LAPPATO(CAPANNORI)',
        "SANT'ANGELO IN CAMPO", 'ALTOPASCIO', 'SERRAVEZZA', 'SERRAVEZZA(RIPA)', 'SAN GENNARO',
        'SAN GENNARO(CAPANNORI)', 'VICOPELAGO', 'SAN CASSIANO A VICO', 'SESTO DI MORIANO', 'SANTISSIMA ANNUNZIATA(LUCCA)',
        'LAMMARI', 'SANTISSIMA ANNUNZIATA(LU)', 'SANTA MARIA DEL GIUDICE', 'BARGECCHIA', 'BICCHIO', 'BOZZANO', 'SALTOCCHIO',
        'S. ANNA', 'S. ANNA-LUCCA', "S. LEONARDO IN T."],

    'pisa' => ['PISA', 'CASCINA', 'MARINA DI PISA', 'SAN GIULIANO TERME', 'SAN GIULIANO TERME(GELLO)',
        'SAN GIULIANO TERME(AGNANO)', 'GELLO(S.GILULIANO TERME)', 'SAN GIULIANO TERME(GHEZZANO)', 'NODICA',
        "MADONNA DELL'ACQUA( S.G.T.)", 'S.G.TERME', 'VECCHIANO', 'MIGLIARINO', 'PONTASSERCHIO(S.G.T)', 'PORTA A MARE',
        'GHEZZANO', 'PISA(ARENA METATO)', 'NODICA(SGT)', 'GHEZZANO(SGT)', 'COLIGNOLA(SGT)', 'SAN LORENZO ALLE CORTI',
        'ASCIANO PISANO', 'ASCIANO (SGTERME)', 'BIENTINA', 'BUTI', 'CALCI', 'CALCINAIA', 'CAPANNOLI',
        'CASTELFRANCO DI SOTTO', 'PONSACCO', 'PECCIOLI', 'SAN GIULIANO TERME', 'LIVORNO', 'CECINA', 'LARI',
        'CASCIANA TERME', 'PIOMBINO', 'TIRRENIA', 'COLLESALVETTI', 'ARENA METATO', 'ASCIANO', 'AVANE', 'BADIA DI CASCINA',
        'CALAMBRONE', 'CAPRONA', 'CASCIANA TERME – LARI', 'CUCIGLIANA', 'FILETTOLE', 'FORNACETTE', 'VICOPISANO',
        'TITIGNANO', 'TERRICCIOLA', 'STAGNO', 'SAN FREDIANO', 'S.MARIA A MONTE', 'RIPOLI', 'RIGLIONE ORATOIO', 'RIGLIONE',
        'PUTIGNANO', 'PONTEDERA', 'PARLASCIO', 'PAPPIANA (SGT)', 'ORZIGNANO (SGT)', 'NAVACCHIO', 'MUSIGLIANO',
        'MOLINA DI QUOSA', 'MEZZANA', 'MARCIANA', "MADONNA DELL'ACQ-SGT", 'LATIGNANO', 'GHEZZANO – PISA',
        'GELLO – SAN GIULIANO TERME', 'GELLO', 'RIGLòIONE', 'SAN GIULIANO', 'MIGLIARINO-VECCHIANO', 'VECCHIANO - PISA',
        'S ANDREA DI S GIULIANO', 'BIENTINA', 'SAN GIORGIO', 'ASCIANO (SGT)', 'MEZZANA, SGT', 'NODICA - VECCHIANO',
        'S. GIULIANO', 'COLIGNOLA', 'MIGLIARINO - VECCHIANO', 'SGT', 'COLTANO', 'NODICA VECCHIANO', 'S G T', 'VECCHIANO  AVANE',
        'PONTASSERCHIO', 'SAN SISTO', 'CASCINA SAN GIORGIO', 'CASCINA FUORI', 'PUNTONE', "CASCINA//", 'CASCINA22', 'NODIA',
        'S GIULIANO', "MADONNA DEL'ACQUA", 'CAPRONA VIO PISANO', 'PISA CEP', 'ULIVETO T', 'PISA RIGLIONE',
        'SAN GIULIANO TERME-METATO', 'S.G TERME', 'OSPEDALETTO', 'PAPPIANA', 'LAIANO-CASCINA', 'CAMPIGLIA MARITTIMA',
        'NODICA-VACCHIANO', 'MOLINA DI QUOSA-S. GIULIANO', 'POMARANCE', 'BARBARICINA-PISA', 'PUTIGNANO-PISA',
        'FAUGLIA', 'PONTASSERCHIO-SAN GIULIANO', 'LORENZANA', "COLIGNOLA-SAN GIULIANO", 'ARENA METATO-S. GIULIANO',
        'CASTELMAGGIORE-CALCI', "GHEZZANO-SAN GIULIANO", "AVANE-VECCHIANO", "METATO-SAN GIULIANO", 'VICARELLO',
        "ORZIGNANO-SAN GIULIANO", "LA VETTOLA- PISA", "FILETTOLE-VECCHIANO", "AREMA METATO-S. GIULIANO",
        "COLIGNOLA-S. GIULIANO", "ORZIGNANO-SAN GIULIANO TERME", "SAN FREDIANO-CASCINA", "ACCIAIOLO-FAUGLIA",
        "NAVACCHIO-CASCINA", "NODICA-VECCHIANO", 'METATO PISA', 'ARENA METATO SGT', 'CASCIAVOLA (CASCINA)',
        'ORATOIO RIGLIONE', "S. GIULIANO TERME", 'SAN PIERO A GRADO', "SAN G. TERME", 'PI', 'ROSIGNANO MARTITTIMO',
        'GELLO(SGTERME)', 'S.G.T', 'MUGLIANO', 'PONTEGINORI', 'BARBARICINA', 'VECCHIANO PISA', 'CISANELLO',
        'ORATOIO', "MADONNA DELL' ACQUA", "CASCINA - PISA", 'ORENTANO', 'CAMPO', 'AREA METATO', "SANT ERMETE",
        "LA VETTOLA", 'CENAIA', 'CASCIANA', 'S. BENEDETTO DI CASCINA', 'RIPOLI DI CASCINA', "CUCIGLIANA, VICOPISANO",
        'SAN GIOVANNI ALLA VENA', 'VISIGNANO  CASCINA', 'VISIGNANO', 'PISSA', "S.GIULIANO TERME", "S. LORENZO ALLE CORTE",
        "SANT ANDREA", "S. GIUSTO", "S. FREDIANO A SETTIMO", 'ORCIANO PISANO', "GELLO- SAN GIULIANO", 'SAN GIUIANO TERME',
        "PISA 56121", "S. GIULIANO T.", "RIPOLI-CASCINA", 'ULIVETO TERME', "AVANE - VECCHIANO", "S:G: TERME",
        "VECCHIANO-SGT", "ORZIGNANO SGT", "TIRRENIA - PISA", "S. PIERO A GRADO"],

    'viareggio' => ['VIAREGGIO', 'FORTE DEI MARMI', 'FORTE DEI MARIMI', 'MASSA', 'TORRE DEL LAGO', 'LIDO DI CAMAIORE',
        'LA SPEZIA', 'FILATTIERA(PONTREMOLI)', 'TONFANO(PIETRASANTA)', 'QUERCETA', 'MONTIGNOSO', 'PIETRASANTA',
        'VITTORIA APUANA', 'SOLAIO(PIETRASANTA)', 'STRETTOIA(PIETRASANAT)', 'LUNI', 'CAMAIORE', 'CAPEZZANO', 'CAPEZZANO PIANORE',
        'CINQUALE MONTIGNOSO', 'CORSANICO', 'FIVIZZANO', 'TORRE DEL LAGO PUCCINI', 'STIAVA (MASSAROSA)', 'SERAVEZZA',
        'RETIGNANO (STAZZEMA)', 'QUERCETA', 'POZZI (SERAVEZZA)', 'POZZI', 'PIEVE A ELICI', 'PIANO DI MOMMIO',
        'PIANO DI CONCA – MASSAROSA', 'MASSAROSA', 'MARINA DI PIETRASANTA',
        'PIANO DI CONCA', 'PIANO DEL QUERCIONE', 'NOCCHI', 'MONTIGIANO (MASSAROSA)', 'MONTIGIANO', 'MONTEMAGNO'],



];
