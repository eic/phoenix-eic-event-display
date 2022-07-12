import { Component, OnInit } from '@angular/core';
import {
  EventDataFormat,
  EventDataImportOption,
  EventDisplayService,
} from 'phoenix-ui-components';
import {
  Configuration,
  PhoenixLoader,
  PresetView,
  PhoenixMenuNode,
  ScriptLoader,
} from 'phoenix-event-display';

@Component({
  selector: 'app-eic-detector',
  templateUrl: './eic-detector.component.html',
  styleUrls: ['./eic-detector.component.scss']
})
export class EicDetectorComponent implements OnInit {

  /** The root Phoenix menu node. */
  phoenixMenuRoot = new PhoenixMenuNode("Phoenix Menu");

  loaded = false;
  loadingProgress = 0;

  eventDataImportOptions: EventDataImportOption[] = [
    EventDataFormat.JSON,
    EventDataFormat.IG,
  ];

  constructor(private eventDisplay: EventDisplayService) { }

  ngOnInit() {
    // Create the event display configuration
    const configuration: Configuration = {
      eventDataLoader: new PhoenixLoader(),
      presetViews: [
        // simple preset views, looking at point 0,0,0 and with no clipping
        new PresetView('Left View', [0, 0, -12000], [0, 0, 0], 'left-cube'),
        new PresetView('Center View', [-500, 12000, 0], [0, 0, 0], 'top-cube'),
        // more fancy view, looking at point 0,0,5000 and with some clipping
        new PresetView('Right View', [0, 0, 12000], [0, 0, 5000], 'right-cube')
      ],
      // default view with x, y, z of the camera and then x, y, z of the point it looks at
      defaultView: [4000, 0, 4000, 0, 0 ,0],
      phoenixMenuRoot: this.phoenixMenuRoot,
      // Event data to load by default
      defaultEventFile: {
        // (Assuming the file exists in the `src/assets` directory of the app)
        eventFile: 'assets/event_data.xml',
        eventType: 'jivexml'
      },
    }

    // Initialize the event display
    this.eventDisplay.init(configuration);

    // Load detector geometry (assuming the file exists in the `src/assets` directory of the app)
    this.eventDisplay.loadGLTFGeometry('assets/eic.gltf', 'Detector');

    this.eventDisplay
      .getLoadingManager()
      .addProgressListener((progress) => (this.loadingProgress = progress));

    this.eventDisplay
      .getLoadingManager()
      .addLoadListenerWithCheck(() => (this.loaded = true));

  }

}
