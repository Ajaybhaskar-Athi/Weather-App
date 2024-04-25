// import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { SkysightData } from 'src/app/models/interfaces/skysight.interface';

@Component({
  selector: 'app-dum-card',
  templateUrl: './dum-card.component.html',
  styleUrls: ['./dum-card.component.css' ]
})
export class DumCardComponent {
  @Input() skysightDatasInput!: SkysightData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon       = faDroplet;
  windIcon           = faWind;
}
