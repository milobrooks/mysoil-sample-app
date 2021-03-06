/** ****************************************************************************
 * General survey configuration file.
 *****************************************************************************/
import $ from 'jquery';
import Indicia from 'indicia';
import DateHelp from 'helpers/date';
import crops from 'crops.data';

const config = {
  survey_id: 2,
  input_form: 'poc-recording-form',

  sample: {
    location: {
      values(location, submission) {
        // convert accuracy for map and gridref sources
        const accuracy = location.accuracy;
        const attributes = {};
        const keys = config.sample;
        attributes.location_name = location.name; // this is a native indicia attr
        attributes[keys.location_source.id] = location.source;
        attributes[keys.location_gridref.id] = location.gridref;
        attributes[keys.location_altitude.id] = location.altitude;
        attributes[keys.location_altitude_accuracy.id] = location.altitudeAccuracy;
        attributes[keys.location_accuracy.id] = accuracy;

        // add other location related attributes
        $.extend(submission.fields, attributes);

        return `${location.latitude}, ${location.longitude}`;
      },
    },
    location_accuracy: { id: 36 },
    location_altitude: { id: 37 },
    location_altitude_accuracy: { id: 38 },
    location_source: { id: 39 },
    location_gridref: { id: 40 },

    device: {
      id: 41,
      values: {
        iOS: 233,
        Android: 234,
      },
    },

    device_version: { id: 42 },

    uid: { id: 35 },

    'your-ref': {
      title: 'Your reference',
      label: 'Add your own reference, if you wish, to help identify the sample.',
      id: 24,
    },

    country: {
      title: 'Country',
      label: 'Please pick the country where you are working.',
      id: 21,
      values: {
        'England': 139,
        'Wales': 140,
        'Scotland': 141,
        'N. Ireland': 235,
      },
    },

    'depth': {
      title: 'Sample depth',
      label: 'Select the sample depth.',
      id: 27,
      values: {
        '0-7.5 cm RB209 Long term grassland': 236,
        '0-15 cm RB209 Arable and field vegetables': 237,
        'Other': 238,
      },
    },

    'sample-type': {
      title: 'Sample type',
      label: 'Select the sample type.',
      id: 28,
      values: {
        'Point (single location)': 142,
        'Multiple points bulked together (e.g. RB209 W)': 143,
      },
    },

    'soil-type': {
      title: 'Soil type',
      label: 'Select the soil type.',
      id: 29,
      values: {
        'Light - sand etc.': 144,
        'Medium - loams': 145,
        'Heavy - clay': 146,
        'Organic - high OM content': 147,
        'Peaty soils': 148,
      },
    },

    'calcareous': {
      title: 'Calcareous soil',
      label: 'Select whether your soil is on chalk or limestone.',
      id: 60,
      values: {
        'Yes': 299,
        'No': 300,
      },
    },

    'structure-score': {
      title: 'Structure score',
      label: 'Select the structure score (VESS).',
      id: 44,
      values: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
      },
    },

    'structure-notes': {
      title: 'Structure notes',
      label: 'Add any notes relating to soil structure.',
      id: 48,
    },

    'land-use': {
      title: 'Land use',
      label: 'Select the rotational land use.',
      id: 43,
      values: {
        'Cropping - combinable crops': 239,
        'Cropping - rotation including late harvested crops': 240,
        'Cropping - rotation including leys': 241,
        'Cropping - field-scale vegetables': 242,
        'Grassland - intensively managed': 243,
        'Grassland - permanent pasture': 244,
      },
    },

    'sample-notes': {
      title: 'Sample notes',
      label: 'Add any notes relating to the collected sample.',
      id: 50,
    },

    'field-name': {
      title: 'Field name',
      label: 'Enter the field name.',
      id: 25,
    },

    'field-size': {
      title: 'Field size',
      label: 'Enter the field size in hectares.',
      id: 26,
    },

  'crop-present': {
      title: 'Crop, present',
      label: 'Select the crop present in the field.',
      id: 30,
      values: crops,
    },

    'crop-future': {
      title: 'Crop, future',
      label: 'Select the intended future crop.',
      id: 31,
      values: crops,
    },

    'straw': {
      title: 'Straw',
      label: 'Select whether straw has been removed.',
      id: 61,
      values: {
        'Removed': 299,
        'Not removed': 300,
      },
    },

    'manure': {
      title: 'Organic fertiliser',
      label: 'Select whether organic fertiliser has been added (includes farmyard manure, slurry, sewage sludge, compost).',
      id: 62,
      values: {
        'Added': 299,
        'Not added': 300,
      },
    },

    'tillage': {
      title: 'Tillage system',
      label: 'Select the type of tillage system employed.',
      id: 47,
      values: {
        'Conservation / zero tillage': 268,
        'Minimum / non-inversion': 269,
        'Plough-based': 270,
      },
    },

    'habitat': {
      title: 'Broad habitat',
      label: 'Select the broad habitat where the sample is being taken.',
      id: 46,
      values: {
        'Arable and horticulture': 245,
        'Calcareous grassland': 246,
        'Improved grassland': 247,
        'Neutral grassland': 248,
        'Acid grassland': 249,
        'Rough grassland': 250,
        'Fen, marsh, swamp': 251,
        'Bog': 252,
        'Heather grassland': 253,
        'Heather': 254,
        'Broadleaved woodland': 255,
        'Coniferous woodland': 256,
        'Montane habitat': 257,
        'Inland rock': 258,
        'Freshwater': 259,
        'Saltmarsh': 260,
        'Supra-littoral sediment': 261,
        'Supra-littoral rock': 262,
        'Littoral-sediment': 263,
        'Littoral-rock': 264,
        'Saltwater': 265,
        'Suburban': 266,
        'Urban': 267,
      },
    },

    'field-notes': {
      title: 'Field notes',
      label: 'Add any notes relating to field management.',
      id: 49,
    },

    'lab-name': {
      title: 'Name',
      label: 'Select the laboratory that will analyse samples.',
      id: 34,
      values: {
        'CEH': 229,
        'NRM': 230,
        'Other':271,
      },
    },

    'client-code': {
      title: 'Client code',
      label: 'Enter your client code for the laboratory.',
      id: 22,
    },

    date: {
      title: 'Date',
      values(date) {
        return DateHelp.print(date);
      },
    },

    group: {
      values(group) {
        return group.id;
      },
    },

    comment: {
      label: 'Please add any extra info about this record.',
    },
  },

  occurrence: {
    training: {
      id: 'training',
    },

    taxon: {
      values(taxon) {
        return taxon.warehouse_id;
      },
    },
  },

  verify(attrs) {
    const attributes = {};

    // todo: remove this bit once sample DB update is possible
    // check if saved or already send
    if (!this.metadata.saved || this.getSyncStatus() === Indicia.SYNCED) {
      attributes.send = false;
    }

    // location
    const location = attrs.location || {};
    if (!location.latitude) {
      attributes.location = 'Missing';
    }

    // date
    if (!attrs.date) {
      attributes.date = 'Missing';
    } else {
      const date = new Date(attrs.date);
      if (date === 'Invalid Date' || date > new Date()) {
        attributes.date = (new Date(date) > new Date()) ? 'Future date' : 'Invalid';
      }
    }

    // sample type required
    if (!attrs['sample-type']) {
      attributes['sample-type'] = 'Missing';
    }

    // sample depth required
    if (!attrs['depth']) {
      attributes['depth'] = 'Missing';
    }

    // field size numeric
    if (attrs['field-size']) {
      const size = new Number(attrs['field-size']);
      if (isNaN(size)) {
        attributes['field-size'] = 'Not numeric';
      }
    }

    // lab name required
    // if (!attrs['lab-name']) {
    //   attributes['lab-name'] = 'Missing';
    // }

    // client code required
    // if (!attrs['client-code']) {
    //   attributes['client-code'] = 'Missing';
    // }

    return [attributes, null, null];
  },
};

export default config;
