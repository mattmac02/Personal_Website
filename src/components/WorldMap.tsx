import { useEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'

interface WorldMapProps {
  visitedCountries: string[]
}

const WorldMap = ({ visitedCountries }: WorldMapProps) => {
  const chartRef = useRef<am5map.MapChart | null>(null)
  const rootRef = useRef<am5.Root | null>(null)

  useEffect(() => {
    // Create root element
    const root = am5.Root.new('world-map-container')
    rootRef.current = root

    // Create chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'translateX',
        panY: 'translateY',
        projection: am5map.geoMercator(),
        homeGeoPoint: { longitude: 0, latitude: 0 }
      })
    )
    chartRef.current = chart

    // Disable zooming
    chart.set('maxZoomLevel', 1)
    chart.set('minZoomLevel', 1)

    // Create polygon series for countries
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        fill: am5.color(0x374151), // Dark gray background for unvisited countries
        stroke: am5.color(0x4b5563),
        exclude: ['AQ'] // Exclude Antarctica
      })
    )

    // Set stroke width for polygon series
    polygonSeries.mapPolygons.template.setAll({
      strokeWidth: 0.5
    })

    // Add hover effects and tooltips for all countries
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      interactive: true,
      fillOpacity: 1 // Set opacity for non-visited countries
    })

    // Add hover effects for unvisited countries
    polygonSeries.mapPolygons.template.states.create('hover', {
      fillOpacity: 1,
      fill: am5.color(0x4b5563) // Slightly lighter gray on hover
    })

    // Create filtered geoJSON with only visited countries
    const visitedGeoJSON = {
      type: 'FeatureCollection' as const,
      features: am5geodata_worldLow.features.filter(feature => 
        feature.properties && visitedCountries.includes(feature.properties.id)
      )
    }

    // Create series for visited countries with filtered geoJSON
    const visitedSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: visitedGeoJSON,
        fill: am5.color(0x3b82f6), // Blue-500 from Tailwind
        stroke: am5.color(0x60a5fa)
      })
    )

    // Set stroke width for visited series
    visitedSeries.mapPolygons.template.setAll({
      strokeWidth: 0.5
    })

    // Add hover effects and tooltips for visited countries
    visitedSeries.mapPolygons.template.setAll({
      tooltipText: '{name} - Visited!',
      interactive: true,
      fillOpacity: 0.8
    })

    // Add hover effects for visited countries
    visitedSeries.mapPolygons.template.states.create('hover', {
      fillOpacity: 1,
      fill: am5.color(0x2563eb) // Blue-600 from Tailwind
    })

    // Add legend
    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        centerY: am5.p100,
        y: am5.p100,
        layout: root.horizontalLayout,
        marginBottom: 20
      })
    )

    legend.data.setAll([
      {
        name: 'Visited Countries',
        fill: am5.color(0x3b82f6) // Blue-500 from Tailwind
      },
      {
        name: 'Not Visited',
        fill: am5.color(0x374151) // Dark gray
      }
    ])

    // Cleanup function
    return () => {
      root.dispose()
    }
  }, [visitedCountries])

  return (
    <div className="w-full">
      <div
        id="world-map-container"
        className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
      />
    </div>
  )
}

export default WorldMap 